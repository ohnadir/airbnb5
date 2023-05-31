const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

exports.processPayment = async (req, res) => {
    try {
        const paymentIntent = await stripe.paymentIntents.create({
            amount: req.body.amount,
            currency: 'usd',
            metadata: { integration_check: 'accept_a_payment' }
        });
        res.status(200).json({
            success: true,
            message:"Payment confirm",
            client_secret: paymentIntent.client_secret
        })
    } catch (error) {
        response.code = 500;
        response.status = 'failed';
        response.message = 'Error. Try again';
        return response;
    }
}