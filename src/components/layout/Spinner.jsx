import spinner from '../../assets/loading-gif.gif';

function Spinner() {
  return (
    <div className='mt-20 w-100'>
      <img
        width={180}
        className='mx-auto text-center'
        src={spinner}
        alt='Loading...'
      />
    </div>
  )
}

export default Spinner