// Dashboard.jsx
import styles from './dashboard.module.css';
import DataTable from 'react-data-table-component';


// Déclaration du composant Dashboard
function Dashboard() {
    const columns = [
        { name: 'First Name', selector: row => row.firstName },
        { name: 'Last Name', selector: row => row.lastName },
        { name: 'Start Date', selector: row => row.startDate },
        { name: 'Department', selector: row => row.department },
        { name: 'Date of Birth', selector: row => row.dateOfBirth },
        { name: 'Street', selector: row => row.street },
        { name: 'City', selector: row => row.city },
        { name: 'State', selector: row => row.state },
        { name: 'Zip Code', selector: row => row.zipCode },
    ]

    const data = [
        {
            firstName: 'Tetyana',
            lastName: 'Chouteau',
            startDate: '1988',
            department: 'Dev',
            dateOfBirth: '27/10/.1978',
            street: '55 rue Blaise Pierre',
            city: 'Argenteuil',
            state: 'Val-d\'Oise',
            zipCode: 95100,
        },
        {
            id: 2,
            title: 'Ghostbusters',
            year: '1984',
        },
    ]

    return (
        <div className={styles['dashboard-container']}>
            <div id="employee-div" class="container">
                <h1>Current Employees</h1>
                <DataTable
                    columns={columns}
                    data={data}
                />
                <a href="employeeslist.html">Home</a>
            </div>
        </div>
    );
}

// Export du composant Dashboard par défaut
export default Dashboard;
