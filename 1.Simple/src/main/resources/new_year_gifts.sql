CREATE TABLE IF NOT EXISTS new_year_gifts (
    id SERIAL PRIMARY KEY,       -- Унікальний ідентифікатор подарунка
    name VARCHAR(255) NOT NULL,   -- Назва подарунка
    description TEXT,            -- Опис подарунка
    price DECIMAL(10, 2),        -- Ціна подарунка (до 2 знаків після коми)
    recipient_name VARCHAR(255),      -- Ім'я отримувача
    recipient_age INT,                -- Вік отримувача
    gift_date DATE,                   -- Дата подарунка
    is_wrapped BOOLEAN DEFAULT TRUE,  -- Статус упаковки (за замовчуванням TRUE, якщо упаковано)
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP  -- Дата та час створення запису
);
