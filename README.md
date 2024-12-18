
# Class 9 Assignment

  Class 11:

     1. Make an array of objects (Min 4 objects).
         carImage, carName, carPrice, carReviews
 
     2. Make a child Component and pass the value through props
     3. Using the map function render child component once and get the values 4 times

# This solution implements all the requirements:
        
      I have created an array of car objects (carsData) with 4 objects, each
        containing carImage, carName, carPrice, and carReviews properties.
        
      I have created a child component   (CarCardChild) that receives these
        values through props.
        
      In the parent component (CarListingParent), I am using the map function
      to render the CarCard component four times with different data.


## Deployment

To deploy this project run

```bash
  npm run dev
```


## Feature

- Displays a list of cars with relevant details such as:
  - Car Image
  - Car Name
  - Car Price
  - Car Reviews
- Dynamically generates car cards using data mapped from an array of car objects.

Define the Props Interface: 
Describes the data structure that will be passed into the component (car image, name, price, and reviews).

CarCard Component: 
This is the main functional component that takes props and renders the card.

Rendering the Image: 
Displays the car image using the Image component with specific width and height.

Displaying Text: 
Shows the car name, price, and reviews with specific styles (font size, weight, and color).

Star Rating: Renders 5 stars, with 3 filled and 2 empty, simulating a 3-star rating system.
Reviews Count: Displays the total number of reviews.


