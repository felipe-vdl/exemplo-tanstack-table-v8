import { useState } from "react";
import { createColumnHelper, FilterFn, SortingFn } from "@tanstack/react-table";

import Table from "./components/Table";
import RowActions from "./components/RowActions";

declare module '@tanstack/table-core' {
  interface SortingFns {
    stringDate: SortingFn<unknown>
  }
  interface FilterFns {
    numToString: FilterFn<unknown>,
    customGlobalFilter: FilterFn<unknown>
  }
}

export default function App() {
  const [data, setData] = useState<User[]>([
    {
      id: 1,
      name: "User Um",
      age: 10,
      email: "user1@test.com",
      gender: "Masculino",
      ipv4: "192.0.0.1",
      created_at: new Date("2023-01-21 00:00:01"),
    },
    {
      id: 2,
      name: "User Dois",
      age: 20,
      email: "user2@test.com",
      gender: "Feminino",
      ipv4: "192.0.0.2",
      created_at: new Date("2023-01-22 00:00:01"),
    },
    {
      id: 3,
      name: "User Três",
      age: 30,
      email: "user3@test.com",
      gender: "Feminino",
      ipv4: "192.0.0.3",
      created_at: new Date("2023-01-23 00:00:01"),
    },
    {
      id: 4,
      name: "User Quatro",
      age: 40,
      email: "user4@test.com",
      gender: "Masculino",
      ipv4: "192.0.0.4",
      created_at: new Date("2023-01-24 00:00:01"),
    },
    {
      id: 5,
      name: "User Cinco",
      age: 50,
      email: "user5@test.com",
      gender: "Masculino",
      ipv4: "192.0.0.5",
      created_at: new Date("2023-01-25 00:00:01"),
    },
    {
      id: 6,
      name: "User Seis",
      age: 60,
      email: "user6@test.com",
      gender: "Masculino",
      ipv4: "192.0.0.6",
      created_at: new Date("2023-01-26 00:00:01"),
    },
    {
      id: 7,
      name: "User Sete",
      age: 70,
      email: "user7@test.com",
      gender: "Masculino",
      ipv4: "192.0.0.7",
      created_at: new Date("2023-01-27 00:00:01"),
    },
    {
      id: 8,
      name: "User Oito",
      age: 80,
      email: "user8@test.com",
      gender: "Masculino",
      ipv4: "192.0.0.8",
      created_at: new Date("2023-01-28 00:00:01"),
    },
    {
      id: 9,
      name: "User Nove",
      age: 90,
      email: "user9@test.com",
      gender: "Masculino",
      ipv4: "192.0.0.9",
      created_at: new Date("2023-01-29 00:00:01"),
    },
    {
      id: 10,
      name: "User Dez",
      age: 100,
      email: "user10@test.com",
      gender: "Masculino",
      ipv4: "192.0.0.10",
      created_at: new Date("2023-01-10 00:00:01"),
    },
    {
      id: 11,
      name: "User Onze",
      age: 110,
      email: "user11@test.com",
      gender: "Masculino",
      ipv4: "192.0.0.11",
      created_at: new Date("2023-01-11 00:00:01"),
    },
  ]);

  const columnHelper = createColumnHelper<User>();

  const defaultColumns = [
    columnHelper.accessor("id", {
      header: 'ID',
      cell: info => info.getValue(),
      sortingFn: "basic",
      filterFn: "numToString"
    }),
    columnHelper.accessor("name", {
      header: 'Nome',
      cell: info => info.getValue(),
      sortingFn: "alphanumeric",
      filterFn: "includesString"
    }),
    columnHelper.accessor("age", {
      header: 'Idade',
      cell: info => info.getValue(),
      sortingFn: "basic",
      filterFn: "numToString"
    }),
    columnHelper.accessor("email", {
      header: 'Email',
      cell: info => info.getValue(),
      sortingFn: "alphanumeric",
      filterFn: "includesString"
    }),
    columnHelper.accessor("gender", {
      header: 'Sexo',
      cell: info => info.getValue(),
      sortingFn: "alphanumeric",
      filterFn: "includesString"
    }),
    columnHelper.accessor("ipv4", {
      header: 'IPV4',
      cell: info => info.getValue(),
      sortingFn: "alphanumeric",
      filterFn: "includesString"
    }),
    columnHelper.accessor(row => row.created_at.toLocaleDateString('pt-br'), {
      id: 'created_at',
      header: 'Data Criada',
      cell: info => info.getValue(),
      sortingFn: "stringDate",
      sortDescFirst: true,
      filterFn: "includesString",
    }),
    columnHelper.display({
      id: 'actions',
      header: "Ações",
      cell: props => <RowActions id={props.row.original.id} />
    })
  ];

  return (
    <div className="flex flex-col items-center min-h-screen bg-gradient-to-r from-purple-700 to-purple-600">
      <div className="w-full px-12 my-auto">
        <Table data={data} columns={defaultColumns} />
      </div>
    </div>
  );
}
