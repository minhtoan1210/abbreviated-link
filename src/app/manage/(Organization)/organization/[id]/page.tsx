'use client'
import { useGetIdOrganization } from '@/queries/useOrganization';
import { useParams } from 'next/navigation'
import React from 'react'

export default function page() {
  const {id} = useParams()
    const { data: getIdOrganization } = useGetIdOrganization(id as string);
  console.log("id", id)
  return (
    <div className='organizationDetail'>
      <div className="title">Detail</div>
      
    </div>
  )
}
