#include <iostream>
#include <cstdlib>
#include <fstream>
#include <chrono> // library for calculating execution time
#include <string>

using namespace std;

int main(int argc, char **argv)
{

    if (argc >= 3)
    {

        int size = atoi(argv[1]);
        int iteration = atoi(argv[2]);

        // start time
        auto start = std::chrono::steady_clock::now();

        // write & read file
        for (int epoch = 0; epoch < iteration; epoch++){

            // writing
            ofstream data("data.txt");
            if (data.is_open()){

                for (int c = 0; c < size; c++){
                    data << "X";
                }

                data.close();

                // reading
                char ch;
                ifstream source("data.txt");

                if (source.is_open()) {

                    while (source >> std::noskipws >> ch) {
                        // do nothing
                    }
                    
                    source.close();
                
                } else {

                    cout << -1 << endl;
                    return 0;
                }

            } else {

                cout << -1 << endl;
                return 0;
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