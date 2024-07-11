export default Component => {
  Component.__docgenInfo = {
    props: {
      icon: {
        type: {
          name: 'string'
        },
        required: false,
        description: 'the Icon type for an icon avatar, see Icon Component',
        defaultValue: {
          value: 'user',
          computed: false
        }
      },
      size: {
        type: {
          name: 'string'
        },
        required: false,
        description: 'the size of the avatar',
        defaultValue: {
          value: 'default',
          computed: false
        }
      },
      src: {
        type: {
          name: 'string'
        },
        required: false,
        description: 'the address of the image for an image avatar'
      },
      srcSet: {
        type: {
          name: 'string'
        },
        required: false,
        description: 'a list of sources to use for different screen resolutions'
      },
      alt: {
        type: {
          name: 'string'
        },
        required: true,
        description: 'this attribute defines the alternative text describing the image'
      },
      avatarOnError: {
        type: {
          name: 'function'
        },
        required: true,
        description: 'Avatar onError callback'
      },
      shape: {
        type: {
          name: 'enum',
          value: [
            {
              value: 'circle'
            },
            {
              value: 'square'
            }
          ]
        },
        required: false,
        description: 'the shape of avatar',
        defaultValue: {
          value: 'circle',
          computed: false
        }
      }
    },
    description: 'Avatar'
  }
}
