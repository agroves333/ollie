import React from 'react'
import { Input } from '@rebass/forms'

export default ({ field, ...props }) => {
  return <Input {...field} {...props} />
}
