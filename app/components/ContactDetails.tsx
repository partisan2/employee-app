import React from 'react'

const ContactDetails = () => {
  return (
    <div className='my-5 md:mx-10 md:px-5'>
        <h1 className='text-lg py-2'>Contact Information</h1>
        <table className='md:w-[1000px] xl:w-[800px] md:mx-4'>
            <tbody>
                <tr>
                    <td colSpan={2} className='py-2'><label className=''>Address</label></td>
                </tr>
                <tr>
                    <td colSpan={2}>
                        <input className='shadow appearance-none border rounded w-3/4 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' type="text" disabled defaultValue='Vihan' />
                    </td>
                </tr>
                <tr>
                    <td className='py-2'><label className=''>Phone</label></td>
                    <td className='py-2'><label className=''>Home</label></td>
                </tr>
                <tr>
                    <td>
                        <input className='shadow appearance-none border rounded w-3/4 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' type="text" disabled defaultValue='Vihan' />
                    </td>
                    <td>
                        <input className='shadow appearance-none border rounded w-3/4 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' type="text" disabled defaultValue='Vihan' />
                    </td>
                </tr>
                <tr>
                    <td colSpan={2} className='py-2'><label className=''>Email</label></td>
                </tr>
                <tr>
                    <td colSpan={2}>
                        <input className='shadow appearance-none border rounded w-1/2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' type="text" disabled defaultValue='Vihan' />
                    </td>
                </tr>
                <tr>
                    <td colSpan={2} className='py-2'><label className=''>Emergency Number</label></td>
                </tr>
                <tr>
                    <td colSpan={2}>
                        <input className='shadow appearance-none border rounded w-1/2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' type="text" disabled defaultValue='Vihan' />
                    </td>
                </tr>
            </tbody>
        </table>
    </div>  
  )
}

export default ContactDetails