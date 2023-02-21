const initialState = {
    payment: {
        coupon: {},
        form: {
            countryCode: "",
            firstName: "",
            lastName: "",
            zip: "",
        }
    },
    cart: {
        products: []
    }
};

const shopping = (state = initialState, action) => {
    switch (action.type) {
        /**
         * @todo pending
         */
        default:
            return state;
    }
}

export default shopping;