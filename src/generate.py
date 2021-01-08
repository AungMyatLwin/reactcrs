

with open("imm.js",mode="w") as file:
    id=1
    price=f"{id}{id}{id}"
    name=f"name{id}"
    description=f"Hello{id}"
    file.write(f"const product =['{ id:{id}, price:{price}, name:{name},description:{description} }'] ")

