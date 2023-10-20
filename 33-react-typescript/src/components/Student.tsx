interface StudentInfo {
  name: string;
  grade: number;
  part?: string;
  handleClick: (name: string, grade: number) => void;
}

export default function Student({ name, grade, part, handleClick }: StudentInfo) {
  return (
    <div onClick={() => handleClick(name, grade)}>
      <ul>
        <li>이름: {name}</li>
        <li>학년: {grade}</li>
        <li>전공: {part || '자유전공'}</li>
      </ul>
    </div>
  );
}
