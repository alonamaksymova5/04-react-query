// import { useQuery } from "@tanstack/react-query";
// import { useState } from "react";
import "./App.css";
// import { useQuery } from "@tanstack/react-query";
// import axios from "axios";

// const fetchPerson = async () => {
//   const response = await axios.get(`https://swapi.info/api/people/1`);
//   return response.data;
// };//функція запиту

// const fetchPerson = async (id: number) => {
//   const response = await axios.get(`https://swapi.info/api/people/${id}`);
//   return response.data;
// };//функція запиту по id

export default function App() {
  // const [count, setCount] = useState(1);//стан для лічильника

  // const myQuery = useQuery({
  //   queryKey: ["myQueryKey"], //унікальний ключ запиту, який використовується для кешування та оновлення даних. Це може бути простий рядок, масив або об'єкт, який унікально ідентифікує запит.
  //   queryFn: myQueryFunction, // асинхронна функція, що виконує запит до API або іншого джерела даних. Ця функція повинна повертати проміс із даними. Вона автоматично викликається для запиту.
  // });

  //ПРИКЛАД USEQUERY
  // const { data, error, isLoading, isError } = useQuery({
  //   queryKey: ["person"],
  //   queryFn: fetchPerson,
  // });

  //  const myQuery = useQuery({
  //    queryKey: ["myKey"],
  //    queryFn: myQueryFn,
  //    enabled: false,/ enabled: characterId !== '', - запит буде виконуватись лише тоді коли користувач щось введе в поле пошуку
  //  });//enabled: false - запит не виконується навіть якщо компоненти монтуються чи змінюються залежності

  // const { data, error, isLoading, isError } = useQuery({
  //   queryKey: ["person", count], // змінюємо ключ запиту залежно від count
  // queryFn: () => fetchPerson(count),
  // });//функція запиту, яка приймає count як параметр. Це дозволяє кожного разу запитувати нові дані для персонажа залежно від значення лічильника.

  return (
    <div>
      {/* <button onClick={() => setCount(count + 1)}>Get next character</button> */}
      {/* {isLoading && <p>Loading...</p>}
      {isError && <p>An error occurred: {error.message}</p>}
      {data && <pre>{JSON.stringify(data, null, 2)}</pre>} */}
    </div>
  );
}

// Кожного разу, коли змінюється count, зміна ключа запиту гарантує, що запит буде повторно виконаний з новими даними. Цей запит виконується при монтуванні компонента і після кожного оновлення стану count.
