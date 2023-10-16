import { useForm } from 'react-hook-form';

import './App.css';

function App() {
  const {
    register, // input 할당, value 변경 감지
    handleSubmit, // form submit 시 호출
    formState: { errors }, // 폼 상태 객체
    watch, // 특정 폼 필드의 값을 실시간으로 사용
  } = useForm();

  const onValid = (data) => {
    console.log('onValid', data);
  };

  // console.log('watch', watch('username'));

  console.log('sadfsdf');

  console.log('errors', errors);
  return (
    <>
      <h1>react-hook-form 라이브러리 데모</h1>
      <form onSubmit={handleSubmit(onValid)}>
        <input
          type="text"
          placeholder="username"
          {...register('username', {
            required: '이름을 입력해주세요',
            minLength: { message: '이름은 최소 2글자 이상 작성해주세요.' },
          })}
        />
        <div>{errors.username?.message}</div>
        <input
          type="email"
          placeholder="email"
          {...register('email', {
            required: '이메일을 입력해주세요',
            validate: {
              useGmail: (v) => v.includes('gmail.com') || 'gmail로만 가입 가능합니다.',
            },
          })}
        />
        <div>{errors.email?.message}</div>
        <input
          type="text"
          placeholder="age"
          {...register('age', {
            validate: {
              isPositive: (v) => v >= 0 || '0 이상의 숫자만 입력 가능합니다',
            },
          })}
        />
        <div>{errors.age?.message}</div>
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default App;
