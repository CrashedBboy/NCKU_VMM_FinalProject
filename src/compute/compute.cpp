#include <iostream>
#include <cstdlib>
#include <chrono> // library for calculating execution time

using namespace std;

int main(int argc, char **argv)
{

    if (argc >= 3)
    {

        int max_prime = atoi(argv[1]);
        int iteration = atoi(argv[2]);

        // start time
        auto start = std::chrono::steady_clock::now();

        // compute prime numbers
        for (int epoch = 0; epoch < iteration; epoch++)
        {

            for (int i = 2; i <= max_prime; i++)
            {

                bool prime = true;
                for (int j = 2; j * j <= i; j++)
                {

                    if (i % j == 0)
                    {

                        prime = false;
                        break;
                    }
                }
            }
        }

        // end time
        auto end = std::chrono::steady_clock::now();

        // calculate execution time
        std::chrono::duration<double, std::milli> execution_time = end - start;

        cout << execution_time.count() << endl;
    }

    return 0;
}