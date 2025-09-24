function status(request, response) {
  response.status(200).json({ chave: "sao a cima da media" });
}

export default status;
