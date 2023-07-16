const checkMillionDollarIdea = (req,res,next) => {
    const { weeklyRevenue, numWeeks } = req.body
    const check = Number(weeklyRevenue) * Number(numWeeks);
    if(check < 1000000){
        res.sendStatus(400);
        return;
    }
    next();
};

// Leave this exports assignment so that the function can be used elsewhere
module.exports = checkMillionDollarIdea;
