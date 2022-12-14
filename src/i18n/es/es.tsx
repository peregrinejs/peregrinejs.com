import Link from '@src/components/Link'
import type DeepPartial from '@src/lib/DeepPartial'

import type Strings from '../Strings'

const es: DeepPartial<Strings> = {
  Home: {
    tagline: 'Cree aplicaciones híbridas artesanales',
    summary: () => (
      <>
        Peregrine fue creado para desarrolladores{' '}
        <strong>curiosos y orientados a los detalles</strong> para explorar{' '}
        <strong>todo el potencial de iOS y Android</strong>, al tiempo que
        proporciona lo esencial para{' '}
        <strong>WebViews ricas en funciones</strong>.
      </>
    ),
    APISection: {
      Serialization: {
        title: 'Serialización segura para tipos',
      },
      Reactivity: {
        title: 'Reactividad asíncrona',
      },
    },
    NewsletterSection: {
      title: 'Suscríbase a nuestro boletín',
      description:
        'Manténgase al día con anuncios de lanzamiento, actualizaciones de la comunidad, nuevas recetas y más.',
      emailPlaceholder: 'Correo electrónico',
      subscribe: 'Suscribirse',
      success: '¡Ahora está suscrito!',
      errors: {
        required: {
          email: 'Se requiere dirección de correo electrónico',
        },
        alreadySubscribed: email => `${email} ya está suscrito.`,
        unknown: errorCode => `¡Algo salió mal! 😭 Error: ${errorCode}`,
      },
    },
    RoadmapSection: {
      title: 'Hoja de ruta',
      RecipeBook: {
        title: 'Libro de recetas',
        description: () => (
          <>
            Cree un repositorio compartido para fragmentos de código nativo,
            denominado{' '}
            <Link href="/philosophy#recipes-not-plugins">Recetas</Link>.
          </>
        ),
      },
      StableRelease: {
        title: 'Versión 1.0',
        description:
          'Lanzamiento de la versión 1.0.0 de Peregrine para Web, iOS y Android.',
      },
      PerformanceEnhancements: {
        title: 'Mejoras de rendimiento',
        description: 'Utilice HTTP/MessageChannels solo cuando sea necesario.',
      },
      AndroidBinarySupport: {
        title: 'Soporte binario para Android',
        description:
          'Traiga paridad a iOS al admitir datos binarios en Android.',
      },
      AppPortfolio: {
        title: 'Portafolio de aplicaciones',
        description:
          'Celebre y muestre los casos de éxito de los usuarios de Peregrine.',
      },
    },
  },
  Philosophy: {
    name: 'Filosofía',
  },
  Comparison: {
    name: 'Comparación',
  },
  Licenses: {
    name: 'Licencias',
  },
  Documentation: {
    name: 'Documentación',
    Introduction: {
      name: 'Introducción',
    },
    Architecture: {
      name: 'Arquitectura',
    },
    QuickTour: {
      name: 'Vista rápida',
    },
  },
  Footer: {
    Overview: {
      title: 'Visión general',
    },
    Community: {
      title: 'Comunidad',
    },
  },
}

export default es
