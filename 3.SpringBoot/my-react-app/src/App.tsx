import './App.css'
import {Button} from "flowbite-react";
import {APP_ENV} from "./env";
import {useEffect} from "react";
import axios from "axios";

import { Table } from "flowbite-react";

function App() {

    console.log("App started", APP_ENV.REMOTE_BASE_URL);

    useEffect(() => {
        axios.get(`${APP_ENV.REMOTE_BASE_URL}/api/categories`)
            .then(resp => {
                console.log(resp.data);
            });
    }, []);

    return (
        <>
            <h1 className="text-3xl font-bold underline">
                Hello world!
            </h1>
            <Button color="purple">Purple</Button>

            <div className="overflow-x-auto">
                <Table>
                    <Table.Head>
                        <Table.HeadCell>Назва</Table.HeadCell>
                        <Table.HeadCell>Фото</Table.HeadCell>
                        <Table.HeadCell>Опис</Table.HeadCell>
                        <Table.HeadCell>

                        </Table.HeadCell>
                    </Table.Head>
                    <Table.Body className="divide-y">
                        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                {'Apple MacBook Pro 17"'}
                            </Table.Cell>
                            <Table.Cell>Sliver</Table.Cell>
                            <Table.Cell>Laptop</Table.Cell>
                            <Table.Cell>
                                <a href="#" className="font-medium text-cyan-600 hover:underline dark:text-cyan-500">
                                    Змінити
                                </a>
                            </Table.Cell>
                        </Table.Row>


                    </Table.Body>
                </Table>
            </div>
        </>
    )
}

export default App
