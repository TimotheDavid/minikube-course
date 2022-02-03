package service 

func FindUser(arr []User, id int) User {
	var user User 
	for i , value := range arr {
		if i == id {
			user = value
		}
	}
	return user
}

func RemoveUser(arr *[]User , id int ) {
	var users =  make([]User, 0, len(*arr) - 1) 
	for i , value := range *arr {
		if i != value.Id {
			users = append(users, value)
		}
	}
	arr = &users
}