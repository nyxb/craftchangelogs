import type { Options } from 'execa'

export async function execCommand(
   cmd: string,
   args: string[],
   // @ts-expect-error is fine
   options?: Options<string>,
) {
   const { execa } = await import('execa')
   // @ts-expect-error is fine
   const res = await execa(cmd, args, options)
   return res.stdout
}
