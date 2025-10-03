# /auth/ ROUTES ARE UNPROTECTED
post    /auth/admin
post    /auth/employee

# /admin/ ROUTES SHOULD BE PROTECTED VIA AN AUTH MIDDLEWARE WHICH USES JWT
get         /admin/manage                           (get all admins)
get         /admin/manage/id/:id                    (get admin with id)
get         /admin/manage/email?email=              (get admin with email)
post        /admin/manage                           (add new admin)
put         /admin/manage/id/:id                    (edit admin with id)
delete      /admin/manage/id/:id                    (delete admin with id)

get         /admin/manage/employee                  (get all employees) 
get         /admin/manage/employee/id/:id           (get employee with id) 
get         /admin/manage/employee/email?email=     (get employee with email) 
post        /admin/manage/employee                  (add new employee)
put         /admin/manage/employee/id/:id           (edit employee with id)
delete      /admin/manage/employee/id/:id           (delete employee with id)


# /employee/ ROUTES SHOULD BE PROTECTED VIA AN AUTH MIDDLEWARE WHICH USES JWT
get         /employee                               (get employee data)
put         /employee                               (update employee password)

post        /employee/requests                      (raise new request)
get         /employee/requests                      (get request history)
put         /employee/requests/id/:id               (edit request)
delete      /employee/requests/id/:id               (delete request)