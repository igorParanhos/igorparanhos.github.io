// import Algorithmia from 'algorithmia';

const ALGO_CLIENT_KEY = 'simBewfuobcR8HDSG7+Y9tQ2rD21';

declare var Algorithmia: {
    client: (apiKey: string) => {
        algo: (url: string) => {
            pipe: (arg: any) => any,
        },
    };
};

const client = Algorithmia.client(ALGO_CLIENT_KEY);

export const getSentiment = async (phrase: string) => {
    const result = await client
        .algo('nlp/SentimentAnalysis/1.0.5')
        .pipe({ document: phrase });

    return result.result[0].sentiment;
};
