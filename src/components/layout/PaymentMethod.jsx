import { useState } from 'react';
import { FaCreditCard } from 'react-icons/fa';
function PaymentMethod() {
  const [exp, setExp] = useState('');
  const [cardnumber, setCardNumber] = useState('');
  const FormatHandleExp = (e) => {
    var text = e.target.value;
    text = text
      .replace(/[^0-9]/g, '')
      .replace(/^([2-9])$/g, '0$1')
      .replace(/^(1{1})([3-9]{1})$/g, '0$1/$2')
      .replace(/^0{1,}/g, '0')
      .replace(/^([0-1]{1}[0-9]{1})([0-9]{1,2}).*/g, '$1/$2');
    setExp(text);
    return null;
  };

  function FormatHandleCardNumber(e) {
    var text = e.target.value;

    if (text.length < 20) {
      text = text.replace(/[^\d ]/g, '');
      text = text.replace(/\W/gi, '').replace(/(.{4})/g, '$1 ');
      setCardNumber(text);
      return true;
    }
  }

  return (
    <div className='border rounded-3'>
      <div className='p-3  d-flex gap-3 align-items-center'>
        {/* <input
          className='form-check-input m-0'
          type='radio'
          name='paymentmethod'
          onChange={(e) => {
            setSelect('credit');
          }}
        /> */}
        <FaCreditCard className='fs-4' />
        Credit/Debit Card
      </div>
      <div className='p-3'>
        <div className='mb-3'>
          <label className='form-label w-100'>CARD NUMBER</label>
          <input
            type='text'
            value={cardnumber}
            className='form-control'
            onChange={FormatHandleCardNumber}
            required
          />
        </div>
        <div className='mb-3'>
          <label className='form-label w-100'>NAME ON CARD</label>
          <input type='text' className='form-control' required />
        </div>
        <div className='d-flex flex-wrap gap-3'>
          <div className='mb-3 col'>
            <label className='form-label w-100'>EXPIRATION DATE (MM/YY)</label>
            <input
              type='text'
              className='form-control'
              value={exp}
              onChange={FormatHandleExp}
              autoComplete='off'
              required
            />
          </div>
          <div className='mb-3 col'>
            <label className='form-label w-100'>SECURITY CODE</label>
            <input
              type='password'
              maxLength={3}
              className='form-control bg-white'
              autoComplete='off'
              required
            />
          </div>
        </div>
      </div>
      <hr className='p-0 m-0 text-secondary' />
      {/* <div className='p-3  d-flex gap-3 align-items-center'>
        <input
          className='form-check-input m-0'
          type='radio'
          name='paymentmethod'
          onChange={(e) => {
            setSelect('paypal');
          }}
        />
        <FaPaypal className='fs-4' />
        Paypal
      </div> */}
    </div>
  );
}

export default PaymentMethod;
