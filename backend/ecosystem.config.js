module.exports = {
    apps: [
        {
            name: "arkmind-assessment",
            script: "npm",
            args: "run dev",
            env: {
                NODE_ENV: "development",
                ENV_VAR1: "environment-variable"
            }
        }
    ]
}