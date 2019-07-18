// const square = x => x * x

// console.log(square(3))

const event = {
  name: 'Birthday Party',
  guestlist: ['ducanh', 'jen', 'Mike'],
  printGuestList() {
    console.log('Guest list for' + this.name)

    this.guestlist.forEach((guest) => {
      console.log(guest + 'is attending' + this.name)
    });
  }
}

event.printGuestList()