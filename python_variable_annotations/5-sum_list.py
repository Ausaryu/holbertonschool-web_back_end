#!/usr/bin/env python3
'''
List summation module.
'''

import typing


def sum_list(input_list: typing.List[float]) -> float:
    '''
    Returns the sum of a list of floating-point numbers.
    '''
    result = 0
    for num in input_list:
        result += num
    return result
