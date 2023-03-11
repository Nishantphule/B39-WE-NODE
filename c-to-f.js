const far = (cel) => (cel*1.8)+32

const [,,c] = process.argv

console.log(far(c))