// import Algorithmia from 'algorithmia';

const ALGO_CLIENT_KEY = 'simBewfuobcR8HDSG7+Y9tQ2rD21';

const client = window.Algorithmia.client(ALGO_CLIENT_KEY);

export const getSentiment = async (phrase: string) => {
    const result = await client
        .algo('nlp/SentimentAnalysis/1.0.5')
        .pipe({ document: phrase });

    console.log(result);

    return result.result[0].sentiment;
};
