package service 


import "testing"


var users = []User{ createUser(),createUser(),createUser()}

func createUser() User {
		user := new(User)
		user.Name = "Lili"
		user.Age = 22
		user.Student = true 
		return *user
}

func TestRemoveUser(t *testing.T) {
	ancien := users
	RemoveUser(&users, 0)
	if len(users) > len(ancien) {
		t.Error("error in remove user")
	}
}



func TestFindUser(t *testing.T) {
	res := FindUser(users, 0)
	if res.Name != "Lili" {
		t.Error("error in the test")
	}
}
