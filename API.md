# /auth/ ROUTES ARE UNPROTECTED
post    /auth/admin
post    /auth/employee

# /admin/ ROUTES SHOULD BE PROTECTED VIA AN AUTH MIDDLEWARE WHICH USES JWT
get         /admin/manage                    (get all admins)
get         /admin/manage/:id                (get admin with id)
get         /admin/manage/:email             (get admin with email)
post        /admin/manage                    (add new admin)
put         /admin/manage/:id                (edit admin with id)
put         /admin/manage/:email             (edit admin with email)
delete      /admin/manage/:id                (delete admin with id)
delete      /admin/manage/:email             (delete admin with email)

get         /admin/manage/employee           (get all employees) 
get         /admin/manage/employee/:id       (get employee with id) 
get         /admin/manage/employee/:email    (get employee with email) 
post        /admin/manage/employee           (add new employee)
put         /admin/manage/employee/:id       (edit employee with id)
put         /admin/manage/employee/:email    (edit employee with email)
delete      /admin/manage/employee/:id       (delete employee with id)
delete      /admin/manage/employee/:email    (delete admin with email)


# /employee/ ROUTES SHOULD BE PROTECTED VIA AN AUTH MIDDLEWARE WHICH USES JWT
get         /employee                        (get employee data)

post        /employee/requests               (raise new request)
get         /employee/requests               (get request history)
put         /employee/requests/:id           (edit request)
delete      /employee/requests/:id           (delete request)