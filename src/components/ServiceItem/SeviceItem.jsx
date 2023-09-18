import cl from './ServiceItem.module.css';

export const ServiceItem = ({ service }) => {
    const handleAdd = function (service, price) {
        // Получаем текущий список услуг из localStorage
        const storedServicesJSON = localStorage.getItem('servicesList');
        // Преобразуем строку JSON обратно в массив объектов
        const storedServices = JSON.parse(storedServicesJSON);

        console.log(storedServices); // Проверяем текущий список услуг

        // Проверяем, есть ли объект с таким же service.id в массиве
        const isServiceExist = storedServices?.some((storedService) => storedService.service === service.id);

        if (!isServiceExist) {
            // Обновляем список услуг, добавляя новую услугу
            const updatedServices = [
                ...(storedServices || []), // Если список пуст, начинаем с пустого массива
                { service: service.id, title: service.title, price }, // Добавляем новую услугу
            ];

            // Преобразуем обновленный список обратно в строку JSON
            const updatedServicesJSON = JSON.stringify(updatedServices);
            // Сохраняем обновленный список в localStorage
            localStorage.setItem('servicesList', updatedServicesJSON);
        }
    };

    const backgroundStyle = {
        backgroundImage: `url('${service.img}')`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '90% 50%',
    };

    return (
        <section
            style={backgroundStyle}
            className={cl.service_item}
            onClick={() => handleAdd(service, service.price)}
        >
            <h4>{service.title}</h4>
            <p>{service.price}</p>
        </section>
    );
};
