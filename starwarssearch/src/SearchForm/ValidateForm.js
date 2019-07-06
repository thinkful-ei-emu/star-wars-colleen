import React from 'react'

export default function ValidateForm(props){
  if(props.message){
    return <div>{props.message}</div>
  } return props.children
}