{
    "builds": [
        {
            "src":"./index.js",
            "use":"@vercel/node"
        }

],
"routes":[
    {
        "src":"/.*",
        "dest":"app.js"
    }
]
}