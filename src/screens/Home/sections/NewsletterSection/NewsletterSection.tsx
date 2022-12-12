import { useSupabaseClient } from '@supabase/auth-helpers-react'
import React from 'react'
import type { SubmitHandler } from 'react-hook-form'
import { useForm } from 'react-hook-form'

import Box from '@src/components/Box'
import Input from '@src/components/Input'
import ProgressButton from '@src/components/ProgressButton'
import _Section from '@src/screens/Home/components/Section'
import { styled } from '@src/stitches.config'

interface FormData {
  email: string
}

const NewsletterSection = (): JSX.Element => {
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
            ? `${email} is already subscribed.`
            : `Something went wrong! 😭 Error: ${error.code}`,
      })
    } else {
      reset()
    }
  }

  const handleSubmit = createSubmitHandler(onSubmit)

  return (
    <Section>
      <Box>
        <h2>Subscribe to our Newsletter</h2>
        <p>
          Keep up to date with release announcements, community updates, new
          recipes, and more.
        </p>
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
            placeholder="Email"
            css={{ flex: 1 }}
            {...register('email', { required: 'Email address is required.' })}
            aria-invalid={errors.email ? 'true' : 'false'}
          />
          <ProgressButton type="submit" inProgress={isSubmitting}>
            Subscribe
          </ProgressButton>
        </Form>
        <Box>
          {isSubmitSuccessful ? (
            <span role="alert">You are now subscribed!</span>
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
