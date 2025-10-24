import { fireEvent } from '@testing-library/react';
import React, { Component } from 'react'

export default class FormValidation extends Component {
    constructor(){
        super();

        this.state = {
            allValid: false,
            firstNameValue: "",
            lastName: "",
            email: "",
            submited: false
        }
    }

  render() {
    return (
      <div className='w-full h-screen bg-green-600 flex justify-center items-center' dir='ltr'>
        <div className='bg-white shadow-xl flex flex-col gap-5 p-5'>
            <div className='bg-blue-600 p-2 text-white font-bold'>Success! Thank you for registering</div>
            <div className='flex flex-col gap-2'>
                <span>First Name :</span>
                <input className='outline-none w-full bg-slate-200 rounded-none p-2 text-slate-700' onChange={event => {this.setState({firstNameValue: event.target.value})}}/>
                {(this.state.submited && !this.state.firstNameValue) && <span className='text-red-600'>This filde is required</span> }
            </div>
            <div className='flex flex-col gap-2'>
                <span>Last Name :</span>
                <input className='outline-none w-full bg-slate-200 rounded-none p-2 text-slate-700'/>
            </div>
            <div className='flex flex-col gap-2'>
                <span>Email :</span>
                <input className='outline-none w-full bg-slate-200 rounded-none p-2 text-slate-700'/>
            </div>
            <button type='submit' className='bg-green-700 hover:bg-green-800 p-2 text-center font-bold text-white' onSubmit={event => {
                event.preventDefault();
                this.setState({email: ";mfsld;mf"});
            }}>Submit</button>
        </div>
      </div>
    )
  }
}
