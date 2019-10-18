import numpy as np
import math

finished = False
w = 101

cells = np.zeros((w,w))

cells[int(w/2)][int(w/2)] = 100000

def toppling():
	global finished,cells,w
	while finished == False:
		toppled = False
		for i in range(w):
			for j in range(w):
				if (cells[i][j] > 3) :
					cells[i][j] = cells[i][j] - 4;
					if ( i > 0 ) :
						cells[i-1][j] = cells[i-1][j] + 1
					if ( j > 0 ) :
						cells[i][j-1] = cells[i][j-1] + 1
					if ( i < w - 1 ):
						cells[i+1][j] = cells[i+1][j] + 1
					if ( j < w - 1 ):
						cells[i][j+1] = cells[i][j+1] + 1
					toppled = True
					break
			if (toppled == True):
				break
		if (toppled == False):
			finished = True
	
def printmatrix():
	for i in range(w):
		for j in range(w):
			print str(int(cells[i][j])) + ' ' ,
		print ''

def tostr():
	s = '['
	for i in range(w):
		s = s + '['
		for j in range(w):
			s = s + str(int(cells[i][j]))
			if j == w - 1:
				s = s + ']'
			else:
				s = s + ','
		if i == w - 1:
			s = s + ']'
		else:
			s = s + ','
	s = s + ']'
	return s
	
toppling()
print tostr()

