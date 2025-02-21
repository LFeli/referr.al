import fastify from "fastify";
import { fastifyCors } from "@fastify/cors"
import { validatorCompiler, serializerCompiler, ZodTypeProvider } from "fastify-type-provider-zod";

const app = fastify().withTypeProvider<ZodTypeProvider>()

app.setSerializerCompiler(serializerCompiler)
app.setValidatorCompiler(validatorCompiler)

app.register(fastifyCors, {
  origin: "http://localhost:3000",
})

app.listen({ port: 3333 }).then(() => {
  console.log('Server running! 🚀...')
})