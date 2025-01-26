import React from 'react';
import {Table} from 'flowbite-react';
import {useGetAllCategoriesQuery} from '../services/categoriesApi';
import {APP_ENV} from "../env";
import {Link} from "react-router-dom";

const CategoriesPage: React.FC = () => {
    const {data: categories, error, isLoading} = useGetAllCategoriesQuery();

    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>Error occurred while fetching categories.</p>;

    return (
        <>
            <h1 className="text-4xl text-center font-bold text-blue-700 shadow-lg p-6 bg-opacity-50 rounded-lg">
                Категорії
            </h1>
            {/* Кнопка для переходу на сторінку створення категорії */}
            <div className="flex justify-start mb-6">
                <Link
                    to="create" // Вказуємо маршрут для створення категорії
                    className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700"
                >
                    Створити категорію
                </Link>
            </div>

            <div className="overflow-x-auto">
                <Table>
                    <Table.Head>
                        <Table.HeadCell>Назва</Table.HeadCell>
                        <Table.HeadCell>Фото</Table.HeadCell>
                        <Table.HeadCell>Опис</Table.HeadCell>
                        <Table.HeadCell>Дії</Table.HeadCell>
                    </Table.Head>
                    <Table.Body className="divide-y">
                        {categories?.map((category) => (
                            <Table.Row key={category.id} className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                    {category.name}
                                </Table.Cell>
                                <Table.Cell>
                                    <img
                                        src={`${APP_ENV.REMOTE_BASE_URL}/images/${category.image}`}
                                        alt={category.name}
                                        className="w-16 h-16 object-cover rounded"
                                    />
                                </Table.Cell>
                                <Table.Cell>{category.description}</Table.Cell>
                                <Table.Cell>
                                    <a href="#"
                                       className="font-medium text-cyan-600 hover:underline dark:text-cyan-500">
                                        Змінити
                                    </a>
                                </Table.Cell>
                            </Table.Row>
                        ))}
                    </Table.Body>
                </Table>
            </div>
        </>
    );
};

export default CategoriesPage;
