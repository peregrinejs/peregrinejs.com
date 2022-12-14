import { useSupabaseClient } from '@supabase/auth-helpers-react'
import React from 'react'
import type { SubmitHandler } from 'react-hook-form'
import { useForm } from 'react-hook-form'

import Box from '@src/components/Box'
import Input from '@src/components/Input'
import ProgressButton from '@src/components/ProgressButton'
import useTranslate from '@src/i18n/useTranslate'
import _Section from '@src/screens/Home/components/Section'
import { styled } from '@src/stitches.config'

interface FormData {
  email: string
}

const NewsletterSection = (): JSX.Element => {
  const t = useTranslate()
  const supabase = useSupabaseClient()
  const {
    register,
    formState: { errors, isSubmitting, isSubmitSuccessful },
    setError,
    reset,
    handleSubmit: createSubmitHandler,
  } = useForm<FormData>()

  const onSubmit: SubmitHandler<FormData> = async ({ email }) => {
    const { error } = await supabase
      .from('newsletter_subscriptions')
      .insert([{ email }])

    if (error) {
      setError('email', {
        message:
          error.code === '23505'
            ? t('Home.NewsletterSection.errors.alreadySubscribed', email)
            : t('Home.NewsletterSection.errors.unknown', error.code),
      })
    } else {
      reset()
    }
  }

  const handleSubmit = createSubmitHandler(onSubmit)

  return (
    <Section>
      <Box>
        <h2>{t('Home.NewsletterSection.title')}</h2>
        <p>{t('Home.NewsletterSection.description')}</p>
      </Box>
      <Box
        css={{
          display: 'flex',
          gap: '1em',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
      >
        <Form
          onSubmit={event => {
            void handleSubmit(event)
          }}
        >
          <Input
            type="email"
            placeholder={t('Home.NewsletterSection.emailPlaceholder')}
            css={{ flex: 1 }}
            {...register('email', {
              required: t('Home.NewsletterSection.errors.required.email'),
            })}
            aria-invalid={errors.email ? 'true' : 'false'}
          />
          <ProgressButton type="submit" inProgress={isSubmitting}>
            {t('Home.NewsletterSection.subscribe')}
          </ProgressButton>
        </Form>
        <Box>
          {isSubmitSuccessful ? (
            <span role="alert">{t('Home.NewsletterSection.success')}</span>
          ) : errors.email ? (
            <span role="alert">{errors.email.message}</span>
          ) : (
            <span>&nbsp;</span>
          )}
        </Box>
      </Box>
    </Section>
  )
}

const Form = styled('form', {
  display: 'flex',
  gap: '1em',
})

const Section = styled(_Section, {
  'display': 'grid',
  'gridTemplateColumns': 'minmax(0, 1fr)',

  '@md': {
    gap: '2rem',
    gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
  },
})

export default NewsletterSection
