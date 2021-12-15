export const serialize = (payload: any): any => {
  const primitives = ['string', 'boolean', 'number', 'undefined']
  if (primitives.includes(typeof payload)) return payload
  else if (typeof payload === 'object') return JSON.stringify(payload)
  else throw new Error('Invalid Payload, Unable to serialize')
}
