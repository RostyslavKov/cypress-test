
export const LOCATORS = {
    Stepper: { 
        StepContent: 'h3:eq(0)',
        btnNextTopBlock: 'button:contains("next"):eq(0)',
    },
    Dialog: {
        btnEnterName: 'button:contains("Enter Name")',
        lblEnterYourName: 'nb-card-header:contains("Enter your name")',
        txtName: '[placeholder="Name"]',
        btnCancel: 'button:contains("Cancel")',
        btnSubmit: 'button:contains("Submit")',
    },
    Layouts: {
        lblHorizontalForm: 'nb-card-header:contains("Horizontal form")',
        txtEmail: '#inputEmail3',
        txtPassword: '#inputPassword3',
        chRememberMe: '.checkbox > nb-checkbox > .label > .custom-checkbox',
        btnSignIn: '.status-warning.shape-rectangle.transitions',
    }
    
};

