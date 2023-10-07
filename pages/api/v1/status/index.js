function status(request, response) {
  response.status(200).json({ chave: "Conseguimos!", vasco: "campeão!" });
}

export default status;
