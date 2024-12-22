package org.example.util;

import lombok.Getter;
import org.example.entities.Dog;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.cfg.Configuration;

public class HibernateUtil {
    @Getter
    private static SessionFactory sessionFactory;

    //Визивається автоматично при запуску програми
    //Можна сказати, як конструктор, але класу творювати загалі не потрібно
    //Потрібно, щочаб десь визвати клас HibernateUtil
    static {
        try {
            var config = new Configuration()
//                    .configure("hibernate.cfg.xml")
                    .configure();
            config.addAnnotatedClass(Dog.class);
            // Створення фабрики сесій
            sessionFactory = config
                    .buildSessionFactory();
            System.out.println("------Підключення до БД успіщно-----");
        } catch (Exception e) {
            System.out.println("Помилка зяднання з БД! " + e.getMessage());
            //e.printStackTrace();
            //throw new ExceptionInInitializerError("Не вдалося створити SessionFactory");
        }
    }

    // Метод для отримання нової сесії
    public static Session getSession() {
        return sessionFactory.openSession();
    }

    // Закриття фабрики сесій
    public static void shutdown() {
        if (sessionFactory != null) {
            sessionFactory.close();
        }
    }
}