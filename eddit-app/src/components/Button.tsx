import type { ComponentStyleConfig } from '@chakra-ui/theme'

export const Button: ComponentStyleConfig = {
  baseStyle: {
    fontWeight: 'bold',
    textTransform: 'uppercase',
    borderRadius: '20px',
    w: '100%',
    m: '20px 0'
  },
  sizes: {
    sm: {
      fontSize: 'sm',
      px: 4, 
      py: 3, 
    },
    md: {
      fontSize: 'md',
      px: 6,
      py: 4,
    },
  },
  variants: {
    outline: {
      border: '1px solid',
      borderColor: '#FE7E02',
      color: '#FE7E02',
    },
    solid: {
      bgGradient: 'linear(to-r, #FF6489 0%, #F9B24E 100%)',
      color: 'white',
    },
  },
  defaultProps: {
    size: 'md',
    variant: 'outline',
  },
}