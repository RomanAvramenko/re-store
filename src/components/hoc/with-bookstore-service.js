import React from 'react'
import { BookstoreServiceConsumer } from '../bookstore-service-context/bookstore-service-context'

export const withBookstoreService = () => (Wrapper) => {
  return (props) => {
    return (
      <BookstoreServiceConsumer>
        {
          (bookstoreService) => {
            return (
              <Wrapper {...props}
                bookstoreService={bookstoreService}
              />
            )
          }
        }
      </BookstoreServiceConsumer>
    )
  }
}