use std::io;

fn processing_a_guess() {
    println!("Guess the number!");

    println!("Please input your guess.");

    //let apples = 5; // immutable
    //let mut bananas = 5; // mutable
    let mut guess = String::new();

    io::stdin()
        .read_line(&mut guess)
        .expect("Failed to read line");

    println!("You guessed: {}", guess);

    let secret_number = rand::thread_rng().gen_range(1..101);
    println!("The secret number is: {}", secret_number);
}

fn main() {
    processing_a_guess()
}
