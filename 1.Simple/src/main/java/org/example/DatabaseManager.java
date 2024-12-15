package org.example;

import java.io.IOException;
import java.net.URISyntaxException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
import java.sql.Statement;

public class DatabaseManager {
    private String host = "ep-polished-math-a2m7h80u.eu-central-1.aws.neon.tech";
    private String user = "salo_owner";
    private String password = "ptrUGjQf0A7g";
    private String database = "salo";

    Connection connection;
    public DatabaseManager() {
        try {
            String url = "jdbc:postgresql://"+host+":5432/"+database;
            connection = DriverManager.getConnection(url, user, password);
//            System.out.println("------Успішне з'єднання------");
        } catch (SQLException e) {
            System.out.println("Проблема підключення до БД."+e.getMessage());
        }
    }

    public void createTables() {
        create_new_year_gifts();
    }
    private void create_new_year_gifts() {
        try {
            var fileName = getClass().getClassLoader()
                    .getResource("new_year_gifts.sql").toURI();
            Path filePath = Path.of(fileName);
            String sql = Files.readString(filePath);
//            System.out.println(sql);
            Statement command = connection.createStatement();
            command.executeUpdate(sql);
            command.close();
            System.out.println("----Таблицю new_year_gifts.sql успішно створено------");
        } catch (URISyntaxException e) {
            System.err.println("Проблема доступу до файлу. "+e.getMessage());
        } catch (IOException e) {
            System.err.println("Проблема читання файлу. "+e.getMessage());
        } catch (SQLException e) {
            System.err.println("Проблема створення команди до БД. "+e.getMessage());
        }
    }
}
