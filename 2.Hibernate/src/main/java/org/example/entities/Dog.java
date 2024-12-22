package org.example.entities;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name="tbl_dogs")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Dog {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    @Column(length = 150, nullable = false)
    private String name;
    private int age;
    @Column(length = 100)
    private String breed;
}
