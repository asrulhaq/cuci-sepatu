document.addEventListener('DOMContentLoaded', function() {
    // Check if user is already logged in
    if (localStorage.getItem('adminLoggedIn') === 'true') {
        window.location.href = 'dashboard_admin.html';
    }
    
    // Set default admin credentials if not already set
    if (!localStorage.getItem('adminCredentials')) {
        const defaultCredentials = {
            username: 'admin',
            password: 'admin123'
        };
        localStorage.setItem('adminCredentials', JSON.stringify(defaultCredentials));
    }
    
    const loginForm = document.getElementById('loginForm');
    const loginAlert = document.getElementById('loginAlert');
    
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        
        // Get stored credentials
        const storedCredentials = JSON.parse(localStorage.getItem('adminCredentials'));
        
        // Check credentials
        if (username === storedCredentials.username && password === storedCredentials.password) {
            // Set login status
            localStorage.setItem('adminLoggedIn', 'true');
            
            // Redirect to dashboard
            window.location.href = 'dashboard_admin.html';
        } else {
            // Show error
            loginAlert.classList.remove('d-none');
            
            // Clear password field
            document.getElementById('password').value = '';
        }
    });
});
