// @ts-expect-error
db.createUser({
    user: "root",
    pwd: "root",
    roles: [
        {
            role: "readWrite",
            db: "mongodb"
        }
    ]
})
