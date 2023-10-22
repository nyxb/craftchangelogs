import nyxb from '@nyxb/eslint-config'

export default nyxb({
   rules: {
      'node/prefer-global/process': 0,
      'ts/no-use-before-define': 0,
   },
})
